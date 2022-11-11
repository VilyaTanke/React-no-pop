import './ErrorAlert.css'

const ErrorAlert = ({resetError, error}) => {
    return (
        <div className='loginPage-error' onClick={resetError}>
        {error.message}
      </div>
    )
};

export default ErrorAlert;