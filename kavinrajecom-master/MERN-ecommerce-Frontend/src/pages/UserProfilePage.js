import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <h1 style={{ color: 'gray', fontSize: '40px', fontFamily: 'fantasy',  }}>MY PROFILE</h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;