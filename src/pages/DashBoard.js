import Header from '../components/Header';
import Timeline from '../components/Timeline';
import SideProfile from '../components/SideProfile';

export default function DashBoard() {
    return (
        <div className="font-body">
            <Header />
            <div className="w-sceen flex justify-center mt-24 px-4">
                <div className="grid grid-cols-3 w-full max-w-screen-lg">
                    <Timeline />
                    <SideProfile />
                </div>
            </div>
        </div>
    );
}
