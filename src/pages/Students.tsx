import { Paper, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";
import { useGetUsersQuery, useDeleteUserMutation } from "../redux-app/api/users-api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from "react-router-dom"; 
import { idRoute } from "../routes";


export default function Students(){
    const {data} = useGetUsersQuery();
    const {t} = useTranslation();
    const navigate = useNavigate();

    const createUser = () => {
        return navigate(ROUTES.PRIVATE.CREATE_STUDENTS)
    };

    const [deleteUser] = useDeleteUserMutation();

    return(
        <>
            <Paper sx={{ flexGrow: 1, p: 3, margin: 3 }}>
                <Typography variant="h4">{t('leftSideBar.students')}</Typography>
                <TableContainer sx={{ p: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{t('addStudent.name')}</TableCell>
                                <TableCell align="center">{t('addStudent.surname')}</TableCell>
                                <TableCell align="center">{t('addStudent.age')}</TableCell>
                                <TableCell align="center">{t('addStudent.phone')}</TableCell>
                                <TableCell align="center">{t('addStudent.gender')}</TableCell>
                                <TableCell align="center">{t('addStudent.height')}</TableCell>
                                <TableCell align="center">{t('addStudent.weight')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data?.map(user => {
                                    const dateNow = new Date().getFullYear();
                                    const userDate = Date.parse(user.birthday);
                                    const age = dateNow - new Date(userDate).getUTCFullYear();
                                return (
                                    <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center">
                                            {user.firstName}
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.lastName}
                                        </TableCell>
                                        <TableCell align="center">
                                           {age}
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.phone}
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.gender == 'male' ? t('addStudent.male') : t('addStudent.female') }
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.height}
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.weight}
                                        </TableCell>
                                        <TableCell sx={{p: 0}}>
                                            <Button onClick={() => {navigate(idRoute.editStudent(user.id));
                                            }}>
                                                <EditOutlinedIcon/>
                                            </Button>
                                        </TableCell>
                                        <TableCell sx={{p: 0}}>
                                            <Button onClick={() => {
                                                    deleteUser(user.id);
                                                }}>
                                                <DeleteOutlineOutlinedIcon sx={{ color: 'red' }}/>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" onClick={() => createUser()}>{t('addStudent.addStudent')}</Button>
            </Paper>
        </>
    )
}