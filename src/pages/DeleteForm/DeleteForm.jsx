import { useState } from "react";
import Button from "../../components/Button/Button";
import "./DeleteFormStyles/deleteFormMain.scss";

const DeleteForm = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = deleteState.id;
        const url = `http://localhost:8080/stats/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            alert("Entry deleted");
        } else {
            const message = await res.text();
            alert(message);
        }
    };

    const [deleteState, setDeleteState] = useState({
        id: "",
    });

    return (
        <div className='delete'>
            <header className='delete__header'>
                Need to delete an old piece of gear from the databanks?
            </header>
            <form onSubmit={handleDelete} className='deleteContainer'>
                <div className='deleteContainer__id'>
                    <p className='deleteContainer__id--text'>ID</p>
                    <input
                        type='text'
                        className='deleteContainer__idInput'
                        value={deleteState.id}
                        onInput={(event) =>
                            setDeleteState({
                                ...deleteState,
                                id: event.target.value,
                            })
                        }
                    />
                </div>
                <Button buttonClass='button__large' buttonText='Submit' />
            </form>
        </div>
    );
};

export default DeleteForm;
