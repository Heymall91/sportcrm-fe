import { useTranslation } from 'react-i18next'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../redux-app/api/users-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import dayjs from 'dayjs'
import { Box, Button, Paper, Typography, TextField, Radio, RadioGroup, FormControl, FormControlLabel, CircularProgress } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import NumberSpinner from '../components/NumberSpinner'

export default function EditStudent(){
    const { id } = useParams();
    const navigate = useNavigate();
    const {data, isLoading} = useGetUserByIdQuery(id as string, {
        skip: !id
    });
    const [updateUser] = useUpdateUserMutation();

    const { t } = useTranslation();

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

    useEffect(() => {
        if(data){
            setDataForm({
                firstName: data.data.firstName || '',
                lastName: data.data.lastName || '',
                phone: data.data.phone || '',
                email: data.data.email || '',
                birthday: data.data.birthday ? dayjs(data.data.birthday) : null,
                gender: data.data.gender || '',
                height: data.data.height || 140,
                weight: data.data.weight || 40
            })
        }
    }, [data])

    const handleOnChange = (field: string, value: any) => {
        setDataForm(prev => ({...prev, [field]:value }))
    }

    const submit = async(e: React.FormEvent) => {
        e.preventDefault();
        try{
            await updateUser({
            id,
            data: {
            firstName: dataForm.firstName,
            lastName: dataForm.lastName,
            phone: dataForm.phone,
            email: dataForm.email,
            birthday: dataForm.birthday ? dataForm.birthday.format('YYYY-MM-DD') : null,
            gender: dataForm.gender,
            height: Number(dataForm.height),
            weight: Number(dataForm.weight)
        }
            }).unwrap();
            navigate('/students')
        } catch(err: any) {
            console.error(err);
        }
    };

    if (isLoading) return <CircularProgress/>;

    return (
        <Paper sx={{p: 2}}>
            <form onSubmit={submit}>
                <FormControl sx={{gap: 2, alignItems: 'baseline'}}>
                    <Typography variant='h4'>{t('addStudent.editStudent')}</Typography>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <TextField size='small' label={t('addStudent.name')} value={dataForm.firstName} onChange={(e) => handleOnChange('firstName', e.target.value)}/>
                        <TextField size='small' label={t('addStudent.surname')} value={dataForm.lastName} onChange={(e) => handleOnChange('lastName', e.target.value)}/>
                    </Box>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <TextField size='small' label={t('addStudent.phone')} value={dataForm.phone} onChange={(e) => handleOnChange('phone', e.target.value)}/>
                        <TextField size='small' label={t('addStudent.email')} value={dataForm.email} onChange={(e) => handleOnChange('email', e.target.value)}/>
                    </Box>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label={t('addStudent.birthday')} views={['day', 'month', 'year']} value={dataForm.birthday} onChange={(newValue) => handleOnChange('birthday', newValue)}/>
                        </LocalizationProvider>
                    </Box>
                    <Typography variant='h6'>{t('addStudent.gender')}</Typography>
                    <RadioGroup
                        value={dataForm.gender}
                        onChange={(e) => handleOnChange('gender', e.target.value)}
                    >
                        <FormControlLabel value='male' control={<Radio/>} label={t('addStudent.male')} />
                        <FormControlLabel value='female' control={<Radio/>} label={t('addStudent.female')}/>
                    </RadioGroup> 
                    <Box>
                        <NumberSpinner label={t('addStudent.height')} min={140} max={200} value={dataForm.height} onValueChange={(value: number) => handleOnChange('height', value)}/>
                    </Box>
                    <Box>
                        <NumberSpinner label={t('addStudent.weight')} min={40} max={100} value={dataForm.weight } onValueChange={(value: number) => handleOnChange('weight', value)}/>
                    </Box>
                    <Button variant='contained' type='submit'>{t('buttons.submit')}</Button>
                </FormControl>
            </form>
        </Paper>
    )
}