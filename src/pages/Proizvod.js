import React from "react";
import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
import {sviProizvodi} from "../sviProizvodi";


export const Proizvod = () => {
    const params = useParams()
    const kategorijaIzRute = params.kategorija
    const idIzRute = params.id

    const proizvod = sviProizvodi.find(product => product.kategorija === kategorijaIzRute && product.id === parseInt(idIzRute));

    return  (
        <Layout>

        </Layout>
    )
}