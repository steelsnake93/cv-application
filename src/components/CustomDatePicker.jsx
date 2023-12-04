import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// CustomDatePicker Component
const CustomDatePicker = ({
    selectedDate, handleDateChange,
    id, label, disabled,
    isEndDate }) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <DatePicker
                id={id}
                selected={selectedDate}
                onChange={handleDateChange}
                disabled={disabled}
                dateFormat="MMM yyyy"
                placeholderText={isEndDate ? "Present" : ""}
            />
        </div>
    );
};

// PropType validation for CustomDatePicker
CustomDatePicker.propTypes = {
    selectedDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]),
    handleDateChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isEndDate: PropTypes.bool
};

// Default props for CustomDatePicker
CustomDatePicker.defaultProps = {
    disabled: false,
    isEndDate: false
};
export default CustomDatePicker;
