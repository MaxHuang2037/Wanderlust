import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './styles.module.css'

export const FlightDatePicker = ({flightType}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={styles.datePicker}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Departure" />
                    {flightType === "roundtrip" && <DatePicker label="Return" />}
                </DemoContainer>
            </div>
        </LocalizationProvider>
    )
}