import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from "@mui/icons-material/Payment";
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const menuItems = [
    {text: 'leftSideBar.dashboard', link: "dashboard",  icon: DashboardIcon},
    {text: 'leftSideBar.previousEvent', link: "previous Event", icon: FlagIcon},
    {text: 'leftSideBar.lessons', link: "lessons", icon: AppRegistrationIcon},
    {text: 'leftSideBar.students', link: "students", icon: PersonIcon},
    {text: 'leftSideBar.statistics', link: "statistics", icon: BarChartIcon},
    {text: 'leftSideBar.payments', link: "payments", icon: PaymentIcon},
    {text: 'leftSideBar.clubs', link: "clubs", icon: InventoryIcon},
    {text: 'leftSideBar.locations', link: "locations", icon: LocationOnIcon},
];