import Button from '../Button';
import './OkScreen';

const OkScreen = ({ children, OkValue, NotValue }) => {
    return (
        <div className='Ok_container'>
            <div className='Ok_message'>{children}</div>
            <div className='Ok_button_cont'>
                <Button onClick={OkValue} variant='primary'>
                    Ok
                </Button>
                <Button onClick={NotValue} variant='primary'>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default OkScreen;