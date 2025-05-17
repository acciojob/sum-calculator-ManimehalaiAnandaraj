import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));
