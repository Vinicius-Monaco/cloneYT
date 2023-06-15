import '../styles/Header.css'
import React from 'react'
import { useState } from 'react'
import imgYt from '../imgs/image-removebg-preview (1).png'
import vini from '../imgs/vini.jpg'
function Botoes(props) {
    return (
        <button className="btnHeader">
            <i class={props.symbol}></i>
        </button>
    )
}

function SearchBar() {
    return (
        <div className="searchBar">
            <form className="searchForm">
                <div className="labelSearchIcon">
                    <i class="bi bi-search"></i>
                </div>
                <input placeholder="Pesquisar" type="text" name="" className="searchInput" id="" />
                <button type="submit" className="searchButton">
                    <i class="bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}

function Header() {
    return (
        <header className="headerTop">
            <div className="leftArea">
                <Botoes symbol="bi bi-list" />
                    <img src={imgYt}></img>
            </div>
            <div className="centralArea">
                <SearchBar />
                <Botoes symbol="bi bi-mic-fill" />
            </div>
            <div className="rightArea">
            <Botoes symbol="bi bi-upload" />
            <Botoes symbol="bi bi-bell-fill" />
            <img src={vini} className="imgAccount"></img>
            </div>
        </header>
    )
}

export default Header