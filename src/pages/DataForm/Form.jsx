import { useState } from "react";
import Button from "../../components/Button/Button";
import "./DataFormStyles/dataFormMain.scss";

const DataForm = () => {
    const handleForm = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/stat";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        });
        const json = await res.json();
        if (res.ok) {
            alert("New greeting has been created");
        } else alert("Something went wrong, please refresh and try again.");
        return json;
    };

    const [formState, setFormState] = useState({
        id: "",
        tier: "",
        material: "",
        name: "",
        type: "",
        handle: "",
        static_damage: "",
        ability_damage: "",
        accuracy: "",
        prayer_bonus: "",
        lifepoint_bonus: "",
        defence_rating: "",
        style: "",
        image: "",
    });

    return (
        <div className='form'>
            <header className='form__header'>
                Need to add a new piece of gear to the databanks?
            </header>
            <form onSubmit={handleForm} className='formContainer'>
                <div className='formContainer__id'>
                    <p className='formContainer__id--text'>ID</p>
                    <input
                        type='text'
                        className='formContainer__idInput'
                        value={formState.id}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                id: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__tier'>
                    <p className='formContainer__tier--text'>Tier</p>
                    <input
                        type='text'
                        className='formContainer__tierInput'
                        value={formState.tier}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                tier: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__material'>
                    <p className='formContainer__material--text'>Material</p>
                    <input
                        type='text'
                        className='formContainer__materialInput'
                        value={formState.material}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                material: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__name'>
                    <p className='formContainer__name--text'>Name</p>
                    <input
                        type='text'
                        className='formContainer__nameInput'
                        value={formState.name}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                name: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__type'>
                    <p className='formContainer__type--text'>Type</p>
                    <input
                        type='text'
                        className='formContainer__typeInput'
                        value={formState.type}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                type: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__handle'>
                    <p className='formContainer__handle--text'>Handle</p>
                    <input
                        type='text'
                        className='formContainer__handleInput'
                        value={formState.handle}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                handle: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__sDamage'>
                    <p className='formContainer__sDamage--text'>
                        Auto Attack Damage
                    </p>
                    <input
                        type='text'
                        className='formContainer__sDamageInput'
                        value={formState.static_damage}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                static_damage: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__aDamage'>
                    <p className='formContainer__aDamage--text'>
                        Ability Damage
                    </p>
                    <input
                        type='text'
                        className='formContainer__aDamageInput'
                        value={formState.ability_damage}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                ability_damage: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__accuracy'>
                    <p className='formContainer__accuracy--text'>Accuracy</p>
                    <input
                        type='text'
                        className='formContainer__accuracyInput'
                        value={formState.accuracy}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                accuracy: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__pBonus'>
                    <p className='formContainer__pBonus--text'>Prayer Bonus</p>
                    <input
                        type='text'
                        className='formContainer__pBonusInput'
                        value={formState.prayer_bonus}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                prayer_bonus: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__lpBonus'>
                    <p className='formContainer__lpBonus--text'>
                        Life Point Bonus
                    </p>
                    <input
                        type='text'
                        className='formContainer__lpBonusInput'
                        value={formState.lifepoint_bonus}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                lifepoint_bonus: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__dRating'>
                    <p className='formContainer__dRating--text'>
                        Defence Rating
                    </p>
                    <input
                        type='text'
                        className='formContainer__dRatingInput'
                        value={formState.defence_rating}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                defence_rating: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__style'>
                    <p className='formContainer__style--text'>Attack Style</p>
                    <input
                        type='text'
                        className='formContainer__styleInput'
                        value={formState.style}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                style: event.target.value,
                            })
                        }
                    />
                </div>
                <div className='formContainer__image'>
                    <p className='formContainer__image--text'>Image URL</p>
                    <input
                        type='text'
                        className='formContainer__imageInput'
                        value={formState.image}
                        onInput={(event) =>
                            setFormState({
                                ...formState,
                                image: event.target.value,
                            })
                        }
                    />
                </div>
                <Button buttonClass='button__large' buttonText='Submit' />
            </form>
        </div>
    );
};

export default DataForm;
