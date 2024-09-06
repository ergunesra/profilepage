import Stack from "@mui/system/Stack";
import HRMButton from "../Button/HRMButton";
import MyInfoPersonCard from "./MyInfoPersonalCard";
//import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Box } from "@mui/material";
import StateContext from "../../context/StateContext";

export default function MyInfoMain({style, onClickEdit}) {
  const {state} = useContext(StateContext);
  const employee = state.employee;

  if (!employee) {
    return <div style={{paddingTop:"25px"}}>No record to display.</div>;
  }
  return (
    <Box>
      {/*Main page content*/}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#101828",
            marginTop:"0px",
          }}
        >
          {employee.firstName} {employee.lastName}
        </h2>
        <HRMButton
          onClick={()=>{
            console.log("called");
            if(onClickEdit){
              onClickEdit(true);
            }
          }}
          mode={"primary"}
          style={{ borderRadius: "8px", width: "60.0px", height: "34.0px",}}
        >
          Edit
        </HRMButton>
      </Stack>
      <MyInfoPersonCard key={employee.empId} employee={employee} />
    </Box>
  );
}

MyInfoMain.propTypes = {};
