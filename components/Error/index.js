import { errorMessage } from "./Error.module.scss";

const Error = ({ error }) => <p className={errorMessage}>{error}</p>;

export default Error;
