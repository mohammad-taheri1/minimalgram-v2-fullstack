import {Box} from "@mui/material";
import SignupComponent from "../components/signup/signup.component";
import signupImg from "../assets/images/signup.png";

const SignupPage = () => {

  return (
    <Box sx={{
      margin: "12px auto",
      display: "flex",
      maxWidth: "1200px",
      flexDirection: {xs: "column-reverse", md: "row"},
    }}>
      <Box sx={{p: 2, flex: 1, width: "100%"}}>
        <SignupComponent/>
      </Box>
      <Box sx={{flex: 2}}>
        <img src={signupImg} alt="signup image" style={{maxWidth: '100%', width: "800px"}}/>
      </Box>
    </Box>

  );
};

export default SignupPage;