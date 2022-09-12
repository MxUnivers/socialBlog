
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
    const [firstName, setfirsName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [telephone, settelephone] = useState("");
    const [code, setcode] = useState("225");
    const [password, setpassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setfirsName(firstName); setlastName(lastName); setemail(email); setcode(code); settelephone(telephone); setpassword()


        await axios.post("http://localhost:8000/api/user/create-user", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            code: code,
            telephone: telephone,
            password: password
        }).then((res) => {
            alert(res.data);
            navigate("/")
        })
    }



    return (
        <div className="mt-10 sm:mt-0 py-3  bg-gray-900">
            <div className="bg-gray-900 flex flex-row justify-center">

                <div className=" bg-gray-900 text-white mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit}>

                        <div className=" text-gray-100 py-3">
                            <h2 className="text-3xl font-bold uppercase text-center"> Inscription</h2>
                            <h2 className="text-xl uppercase text-center"> Créer vortre compte pour être a jour </h2>
                        </div>

                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex flex-col">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="first-name" className="block text-sm font-medium ">Nom </label>
                                        <input required value={firstName} onChange={(e) => {
                                            e.preventDefault();
                                            setfirsName(e.target.value)
                                        }} type="text" name="first-name" id="first-name" autocomplete="given-name" className="text-gray-900 border border-gray-30 py-2 px-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="last-name" className="block text-sm font-medium ">Prénoms</label>
                                        <input required value={lastName} onChange={(e) => {
                                            e.preventDefault();
                                            setlastName(e.target.value)
                                        }} type="text" name="last-name" id="last-name" autocomplete="family-name" className="text-gray-900 border border-gray-30 py-2 px-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label for="email-address" className="block text-sm font-medium ">Adresse email</label>
                                        <input required value={email} onChange={(e) => {
                                            e.preventDefault();
                                            setemail(e.target.value)
                                        }} type="text" name="email-address" id="email-address" autocomplete="email" className="text-gray-900 border border-gray-30 py-2 px-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="country" className="block text-sm font-medium ">code</label>

                                        <div className="flex flex-row space-x-3">
                                            <select value={code} onChange={(e) => {
                                                e.preventDefault();
                                                setcode(e.currentTarget.value)
                                            }} id="country" name="country" autocomplete="country-name" className="text-gray-900 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="225">Côte d'ivoire</option>
                                                <option value="221">Burikina</option>
                                                <option value="227" >Bénin</option>
                                            </select>
                                            <input required value={telephone} onChange={(e) => {
                                                e.preventDefault();
                                                settelephone(e.target.value);
                                            }} type="number" name="email-address" id="email-address" autocomplete="email" placeholder="0215271819" className="text-gray-900 border border-gray-30 py-2 px-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />


                                        </div>

                                    </div>

                                    <div className="col-span-6">
                                        <label for="street-address" className="block text-sm font-medium ">mot de passe</label>
                                        <input required value={password} onChange={(e) => {
                                            e.preventDefault();
                                            setpassword(e.target.value);
                                        }} type="password" name="street-address" id="street-address" autocomplete="street-address" className="text-gray-900 border border-gray-30 py-2 px-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>




                                </div>
                            </div>
                            <div className="px-4 py-3  sm:px-6">
                                <button type="submit" className="w-full  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">S'inscrire</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SingUp