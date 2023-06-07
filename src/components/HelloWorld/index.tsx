/**
 * The HelloWorld component renders an alert with
 * the package name, version and environment.
 */

// External imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AlertProps, BoxProps } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { logoutUser } from "../../features/auth/authSlice";

// Local imports
// import styles from "./index.module.scss";

// Component props
export interface HelloWorldProps {
  /**
   * The alert message styles.
   * See: https://mui.com/material-ui/api/alert
   */
  alert?: AlertProps;
  /**
   * The box container styles.
   * See: https://mui.com/material-ui/api/box
   */
  box?: BoxProps;
  text?: string;
}

// Component definition
function HelloWorld({ alert, box, text }: HelloWorldProps) {
  const defaults = HelloWorld.defaultProps;
  const boxProps = { ...defaults.box, ...box } as BoxProps;
  const alertProps = { ...defaults.alert, ...alert } as AlertProps;

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box {...boxProps}>
      <Alert {...alertProps}>
        <AlertTitle>{text}</AlertTitle>
      </Alert>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
}

// Default props
HelloWorld.defaultProps = {
  alert: {
    severity: "success",
    sx: { width: 300 },
    variant: "filled",
  },
  box: {},
  text: "hello-world",
};

// Default export
export default HelloWorld;
