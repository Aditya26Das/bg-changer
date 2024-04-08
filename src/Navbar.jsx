import logo from './assets/logo.svg'
import React from "react";

function Navbar(props) {
  return (
    <div>
      <div className="flex flex-row justify-center rounded-3xl bg-black">
        <ul className= "flex flex-row">
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-red-700">
            <button onClick={() => {props.setColor("red")}}>red</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-blue-700">
            <button onClick={() => {props.setColor("blue")}}>blue</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-green-500">
            <button onClick={() => {props.setColor("green")}}>green</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-yellow-300">
            <button onClick={() => {props.setColor("yellow")}}>yellow</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-pink-500">
            <button onClick={() => {props.setColor("pink")}}>pink</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-white bg-orange-400">
            <button onClick={() => {props.setColor("orange")}}>orange</button>
          </li>
          <li className="w-20 rounded-3xl text-center my-4 mx-4 text-black bg-white">
            <button onClick={() => {props.setColor("white")}}>white</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
