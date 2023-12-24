import React, { useEffect, useState } from "react";
import './MainContent.css';
import pokemonLogo from '../../asserts/images/pokemon_Logo.png';
import Select from 'react-select';
import SweetAlert2 from 'react-sweetalert2';
import ClipLoader from "react-spinners/ClipLoader";

const MainContent = () => {
    const [searchValue, setSearchValue] = useState('');
    const [dropDownOptions, setDropDownOptions] = useState('');
    const [options, setOptions] = useState(null);
    const [nameData, setNameData] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [boolValue, setBoolValue] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [statsBool, setStatsBool] = useState([]);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [swalProps, setSwalProps] = useState({});

    const calculatePercentage = (maxvalue, minValue) => {
        return ((minValue) / (maxvalue)) * 100;
    };

    function showStatsValue(index) {
        setSwalProps({
            show: true,
            showConfirmButton: false,
            showCloseButton: true
        });
        const newSwalProps = [...statsBool];
        newSwalProps[index] = {
            show: true,
        };
        setStatsBool(newSwalProps);
    };

    function resetStatsBool(index) {
        const newSwalProps = [...statsBool];
        newSwalProps[index] = {
            show: false,
        };
        setStatsBool(newSwalProps);
    }

    const toCamelCase = (str) => {
        if (str) {
            return str
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
    };

    const handleSelectChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedValue(selectedOption.value);
            if (selectedOption.value === 'All Types') {
                fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
                    .then(response => response.json())
                    .then(pokemonData => setNameData(Object.values(pokemonData.results).map((item) => ({
                        label: item.name,
                    }))))
                    .catch(error => console.error('Error fetching data using all types', error));

                ;
                setCardData([]);
                console.log(nameData);
                setBoolValue(false);
            }
            else {
                fetch(`https://pokeapi.co/api/v2/type/${selectedOption.value.toLowerCase()}`)
                    .then(response => response.json())
                    .then(pokemonData => setNameData(Object.values(pokemonData.pokemon).map((item) => ({
                        label: item.pokemon.name,
                    }))))
                    .catch(error => console.error('Error fetching data using type selected', error));


                setCardData([]);
                console.log(nameData);
                setBoolValue(true);
            }
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            margin: '10px',
            width: '200px',
            cursor: 'pointer',
        }),
        menu: (provided) => ({
            ...provided,
            width: '200px',
            marginLeft: '10px',
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: 'white',
            cursor: 'pointer',
            color: 'black',
            borderBottom: '1px solid grey',
            "&:hover": {
                backgroundColor: 'rgb(196, 203, 203)',
            }
        }),
    };

    const customStyles_mobile = {
        control: (provided) => ({
            ...provided,
            margin: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80vw',
            cursor: 'pointer',
        }),
        menu: (provided) => ({
            ...provided,
            margin: '10px',
            marginLeft: '10vw',
            marginRight: 'auto',
            width: '80vw',
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: 'white',
            cursor: 'pointer',
            color: 'black',
            borderBottom: '1px solid grey',
            "&:hover": {
                backgroundColor: 'rgb(196, 203, 203)',
            }
        }),
    };

    const fetchBasedOnSearch = (value) => {
        if (value !== 0 && value !== undefined && value !== null) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
                .then(response => response.json())
                .then(pokemonData => {
                    if(pokemonData!==undefined){
                        setNameData([{ label: value.toLowerCase() }]);
                    }
                    else{
                        setNameData([]);
                    }
                })
                .catch(error => {
                    setNameData([]);
                    console.error('Error fetching data using all types', error);
                });

            setCardData([]);
            setBoolValue(true);
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
        else {
            setNameData([]);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {

        const fetchTypes = () => {
            fetch(`https://pokeapi.co/api/v2/type/`)
                .then(response => response.json())
                .then(types => setDropDownOptions(types.results))
                .catch(error => console.error('Error fetching types:', error));
            if (dropDownOptions !== undefined || dropDownOptions !== '') {
                setOptions([{ label: 'All Types', value: 'All Types' }, ...Object.values(dropDownOptions).map((item) => ({
                    label: toCamelCase(item.name),
                    value: toCamelCase(item.name),
                }))]);
            }
        }

        if (options === null || options.length === 1) {
            fetchTypes();
        }

        if (nameData == null && boolValue === false) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
                .then(response => response.json())
                .then(pokemonData => setNameData(Object.values(pokemonData.results).map((item) => ({
                    label: item.name,
                }))))
                .catch(error => console.error('Error fetching data using all types', error));

        }

        if (nameData !== null) {
            nameData.forEach((name, index) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${name.label}`)
                    .then(response => response.json())
                    .then(pokemonData => {
                        setCardData((prevData) => [...prevData, pokemonData]);
                    })
                    .catch(error => console.error('Error fetching data using name or id:', error));
            });

        }

    }, [dropDownOptions, options, nameData, boolValue]);

    return (
        <div>
            <div className="Navbar">
                <span className="mobile-hamburger" onClick={toggleMobileMenu}>
                    ☰
                </span>
                <img className="Logo" src={pokemonLogo} alt="Pokemon Name Logo"></img>
                <div className="logoName"><span style={{ color: 'yellow' }}>Poke</span>dex</div>
                {isMobileMenuOpen ? (
                    <div className="mobile_nav">
                        <div className="search_mobile">
                            <input className='searchInput_mobile'
                                value={searchValue}
                                type="text"
                                placeholder="search by name or id"
                                onChange={e => setSearchValue(e.target.value)}
                            />
                            <button className="searchButton_mobile" onClick={() => searchValue !== '' && fetchBasedOnSearch(searchValue)}>Search</button>
                        </div>
                        <div className="dropdown_nav">
                            <Select
                                defaultValue={selectedValue}
                                onChange={(selectedOption) => {
                                    setSelectedValue(selectedOption);
                                    handleSelectChange(selectedOption);
                                }}
                                options={options}
                                placeholder="Select a type"
                                styles={customStyles_mobile}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="nav">
                        <input className='searchInput'
                            value={searchValue}
                            type="text"
                            placeholder="search by name or id"
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button className="searchButton" onClick={() => searchValue !== '' && fetchBasedOnSearch(searchValue)}>Search</button>
                        <div className="dropdown">
                            <Select
                                defaultValue={selectedValue}
                                onChange={(selectedOption) => {
                                    setSelectedValue(selectedOption);
                                    handleSelectChange(selectedOption);
                                }}
                                options={options}
                                placeholder="Select a type"
                                styles={customStyles}
                            />
                        </div>
                    </div>
                )}
            </div>
            {nameData !== null ? (<div className="totalResults">
                Showing {nameData.length} results of 1302
            </div>) : (null)}
            <div className="MainContent">
                {(nameData !== null && cardData !== null) ? (nameData.map((name, index) => (
                    <div className='cards' key={index}>
                        <div className="nameAndType">
                            <div className="Name">{
                                toCamelCase(cardData[index]?.forms[0].name)
                            }
                            </div>

                            <div className="types">
                                {
                                    cardData[index]?.types.map((type, typeIndex) => (
                                        <div className='type' key={typeIndex}>
                                            {toCamelCase(type.type.name)}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="idAndImage">
                            <div className="id">
                                #{
                                    cardData[index]?.id
                                }
                            </div>

                            <div>
                                <img className="image"
                                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${cardData[index]?.id}.svg`}
                                    alt={`${toCamelCase(cardData[index]?.forms[0].name)}`}
                                ></img>
                            </div>
                        </div>
                        <div className="ShowStats" onClick={() => showStatsValue(index)}>Show Stats</div>
                        {statsBool[index]?.show && (
                            <SweetAlert2 {...swalProps} didClose={() => resetStatsBool(index)}>
                                <div className="sweetTitle">Statistics of {toCamelCase(cardData[index]?.forms[0].name)}</div>
                                <div className="sweetAlertContent">
                                    <div className="sweetAlertMobile">
                                        <img className="SweetAlertImage"
                                            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${cardData[index]?.id}.svg`}
                                            alt={`${toCamelCase(cardData[index]?.forms[0].name)}`}
                                        ></img>
                                    </div>
                                    <div className="sweetAlertStatsMobile">
                                        {
                                            cardData[index]?.stats.map((stat, statIndex) => (
                                                <div className='statsTable' key={statIndex}>
                                                    <div className='statsName'>
                                                        {toCamelCase(stat.stat.name)}
                                                    </div>
                                                    <div className="stats">
                                                        <div style={{ textAlign: 'right', marginBottom: '2px' }}>{stat.base_stat}</div>
                                                        <div className="scroll-bar">
                                                            <div
                                                                style={{
                                                                    width: `${calculatePercentage(220, stat.base_stat)}%`,
                                                                    height: '10px',
                                                                    background: 'green',
                                                                    transition: 'width 2s ease-in-out',
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </SweetAlert2>
                        )}
                    </div>
                ))) : (
                    <div style={{ marginTop: '150px' }}>
                        <ClipLoader
                            color='white'
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
export default MainContent;