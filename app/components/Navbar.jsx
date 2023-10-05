"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsBackspaceFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation"; // Import the useRouter hook

function Navbar() {
  const router = useRouter(); // Use the useRouter hook to get the current route

  return (
    <StyledNavbar>
      <Link href={router.pathname !== "/" ? "/" : "/settings"}>
        {router.pathname !== "/" ? (
          <BsBackspaceFill size={24} color="white" />
        ) : (
          <RiSettings3Fill size={22} color="white" />
        )}
      </Link>
      {/* Add your other navigation items here */}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
  padding-top: 12px;
  gap: 15px;
  font-size: 18px;
`;
