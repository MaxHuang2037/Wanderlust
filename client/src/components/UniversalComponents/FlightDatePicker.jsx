import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './styles.module.css'

export const FlightDatePicker = ({flightType, setDepDate, setRetDate, label1, label2}) => {
    const setDateDep = (date) => {
        const day = date.$D < 10 ? `0${date.$D}` : date.$D
        const month = date.$M < 10 ? `0${date.$M + 1}` : date.$M + 1
        // console.log(`${date.$y}-${month}-${day}`)
        setDepDate(`${date.$y}-${month}-${day}`)
    }

    const setDateRet = (date) => {
        const day = date.$D < 10 ? `0${date.$D}` : date.$D
        const month = date.$M < 10 ? `0${date.$M + 1}` : date.$M + 1
        // console.log(`${date.$y}-${month}-${day}`)
        setRetDate(`${date.$y}-${month}-${day}`)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={styles.datePicker}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker format={"YYYY-MM-DD"} onChange={(date) => setDateDep(date)} label={label1} />
                    {flightType === "roundtrip" && <DatePicker format={"YYYY-MM-DD"} onChange={(date) => setDateRet(date)} label={label2} />}
                </DemoContainer>
            </div>
        </LocalizationProvider>
    )
}