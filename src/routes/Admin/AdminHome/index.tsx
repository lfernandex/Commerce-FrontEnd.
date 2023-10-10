import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import { findMe } from "../../../services/UserService";

export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        findMe()
        .then(response => {
            setUser(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log("Error: " + error)
        })
    }, [])

    return (
        <>
            <main>
                <section id="admin-home-section" className="fb-container">

                    <h2 className="fb-section-title">Bem vindo à área administrativa {user?.name}</h2>

                </section>
            </main>
        </>
    );
}