import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Flex } from "@chakra-ui/react";

export default function App() {
    return (
        <Flex direction="column" minH="100vh">
            <Box flex="1">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Flex>
    );
}
