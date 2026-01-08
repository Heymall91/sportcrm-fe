import { Box, Button, Paper, Typography, TextField, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import NumberSpinner from '../components/NumberSpinner'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCreateUserMutation } from '../redux-app/api/users-api'
import { useNavigate } from 'react-router-dom'

export default function CreateStudent(){
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            birthday: null as any,
            gender: '',
            height: 140,
            weight: 40
    });
    const { t } = useTranslation();

    const [createUser] = useCreateUserMutation(); 

    const handleOnChange = (field: string, value: any) => {
        setDataForm(prev => ({...prev, [field]:value }))
    }

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await createUser({
            firstName: dataForm.firstName,
            lastName: dataForm.lastName,
            phone: dataForm.phone,
            email: dataForm.email,
            birthday: dataForm.birthday ? dataForm.birthday.format('YYYY-MM-DD') : null,
            gender: dataForm.gender,
            height: Number(dataForm.height),
            weight: Number(dataForm.weight)
            })
            .unwrap()
            navigate('/students')
        } catch(err: any){
            console.error(err);
        }
    }

    return (
        <Paper sx={{p: 2}}>
            <form onSubmit={submit}>
            <FormControl sx={{gap: 2, alignItems: 'baseline'}}>
                <Typography variant='h4'>{t('addStudent.addStudent')}</Typography>
                <Box sx={{display: 'flex', gap: 1}}>
                    <TextField size='small' label={t('addStudent.name')} onChange={(e) => handleOnChange('firstName', e.target.value)} value={dataForm.firstName}/>
                    <TextField size='small' label={t('addStudent.surname')} onChange={(e) => handleOnChange('lastName', e.target.value)} value={dataForm.lastName}/>
                </Box>
                <Box sx={{display: 'flex', gap: 1}}>
                    <TextField size='small' label={t('addStudent.phone')} onChange={(e) => handleOnChange('phone', e.target.value)} value={dataForm.phone}/>
                    <TextField size='small' label={t('addStudent.email')} onChange={(e) => handleOnChange('email', e.target.value)} value={dataForm.email}/>
                </Box>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker label={t('addStudent.birthday')} views={['day', 'month', 'year']} value={dataForm.birthday} onChange={(newValue) => handleOnChange('birthday', newValue)}/>
                    </LocalizationProvider>
                </Box>
                <RadioGroup name='gender' onChange={(e) => handleOnChange('gender', e.target.value)} value={dataForm.gender}>
                    <Typography variant='h6'>{t('addStudent.gender')}</Typography>
                    <FormControlLabel value='male' control={<Radio/>} label={t('addStudent.male')}/>
                    <FormControlLabel value='female' control={<Radio/>} label={t('addStudent.female')}/>
                </RadioGroup>
                <Box>
                    <NumberSpinner label={t('addStudent.height')} min={140} max={200} value={dataForm.height} onValueChange={(value: number) => handleOnChange('height', value)}/>
                </Box>
                <Box>
                    <NumberSpinner label={t('addStudent.weight')} min={40} max={100} value={dataForm.weight} onValueChange={(value: number) => handleOnChange('weight', value)}/>
                </Box>
                <Button variant='contained' type='submit'>{t('buttons.create')}</Button>
            </FormControl>
            </form>
        </Paper>
    )
}