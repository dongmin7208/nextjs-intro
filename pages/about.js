import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
export default function Potato() {
    return (
        <div>
            <Seo title="About" />
            <NavBar />
            <h1>about</h1>
        </div>
    );
}
