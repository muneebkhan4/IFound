import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePicker } from "rsuite";
import IfPersonList from "./low-level/ifPersonList";
import ThingPost from "../../components/ThingPost";
import SearchEvent from "../../components/SearchEvent/SearchEvent";
import RangeInput from "../../components/RangeInput/rangeInput";
import DropDown from "../../components/DropDown";
import NavBar from "../../sections/NavBar";
import "./personPage.css";
import { COLORS } from "../../styles/globalColors";
import { GenderType } from "../../Enums/Enums";
import { cities } from "../../static/static";
import { DeleteActivePost } from "../../services/ActiveCasesService";
import Select from "react-select";
import Footer from "../../sections/Footer";

const ThingPage = ({ url, toast }) => {
  const [ThingPosts, setThingPosts] = useState();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState({
    personPosts: [],
    filteredPosts: [],
  });

  const [permissions, setPermissions] = useState({
    deletePermission: false,
  });

  useEffect(() => {
    const getThingPostData = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      try {
        const { data } = await axios.get(url, {
          headers: {
            x_auth_token: token,
          },
        });
        setThingPosts(data);
        setFilteredData(data);
      } catch (err) {
        if (err) console.log(err.response.data);
      }
    };

    const validate = async () => {
      const token = localStorage.getItem("x_auth_token");
      let userType;
      try {
        userType = await axios.post(
          `${process.env.REACT_APP_NODE_API}verifyToken`,
          userType,
          {
            headers: {
              x_auth_token: token,
            },
          }
        );
        debugger;
        if (userType?.data === "admin")
          setPermissions({ deletePermission: true });
      } catch (err) {
        console.log(err);
      }
    };

    getThingPostData();
    validate();
  }, [url]);

  const [filteredData, setFilteredData] = useState();
  const [cityFilter, setCityFilter] = useState({
    value: "",
    label: "Select city",
  });
  const [categoryFilter, setCategoryFilter] = useState({
    value: "",
    label: "Select category",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    // Apply filter when cityFilter changes
    const applyFilter = () => {
      if (cityFilter.value !== "" && categoryFilter.value === "") {
        const filtered = ThingPosts.filter(
          (item) => item.data.city === cityFilter.value
        );
        setFilteredData(filtered);
      } else if (cityFilter.value !== "" && categoryFilter.value !== "") {
        const filtered = ThingPosts.filter(
          (item) =>
            item.data.city === cityFilter.value &&
            item.data.category === categoryFilter.value
        );
        setFilteredData(filtered);
      } else if (cityFilter.value === "" && categoryFilter.value !== "") {
        const filtered = ThingPosts.filter(
          (item) => item.data.category === categoryFilter.value
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(ThingPosts);
      }
    };
    applyFilter();
  }, [filteredData, ThingPosts, cityFilter, categoryFilter]);

  // Define the options for the city dropdown
  const cityOptions = [
    { value: "", label: "Select city" },
    { value: "Lahore", label: "Lahore" },
    { value: "Karachi", label: "Karachi" },
    { value: "Peshwar", label: "Peshwar" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Multan", label: "Multan" },
  ];

  const categoryOptions = [
    { value: "", label: "Select category" },
    { value: "Mobile", label: "Mobile" },
    { value: "Laptop", label: "Laptop" },
    { value: "Watch", label: "Watch" },
    { value: "Wallet", label: "Wallet" },
    { value: "Glasses", label: "Glasses" },
  ];

  // Handle city selection
  const handleCityChange = (selectedOption) => {
    setCityFilter(selectedOption);
    if (selectedOption.value === "") {
      setFilteredData(ThingPosts);
    }
  };

  // Handle category selection
  const handleCategoryChange = (selectedOption) => {
    setCategoryFilter(selectedOption);
    if (selectedOption.value === "") {
      setFilteredData(ThingPosts);
    }
  };

  const handleDateFilter = (startDate, endDate) => {
    // Perform the filtering based on the selected dates
    const filtered = ThingPosts.filter((item) => {
      const itemDate = new Date(item.data.date);
      return itemDate >= startDate && itemDate <= endDate;
    });

    // Update the filtered data state
    setFilteredData(filtered);
  };

  const handleFilter = () => {
    handleDateFilter(startDate, endDate);
  };

  // const screenHeight = window.innerHeight;
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      {/* <h1 className="App-header">Lost List</h1> */}
      <div className="MainContent">
        <div className="d-flex align-items-center justify-content-around FilterStyle">
          <Select
            options={cityOptions}
            value={cityFilter}
            onChange={handleCityChange}
            placeholder="Select a city"
          />
          <Select
            options={categoryOptions}
            value={categoryFilter}
            onChange={handleCategoryChange}
            placeholder="Select a category"
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            dateFormat="yyyy-MM-dd"
          />
          <button onClick={handleFilter}>Apply Filter</button>
        </div>

        <h1 className="App-header">Things Cases</h1>
        {!ThingPosts && (
          <div className="center spinner-grow fonts" role="status">
            <span className="center visually-hidden">Loading...</span>
          </div>
        )}
        <div style={{ margin: "30px" }} className="row">
          {filteredData &&
            filteredData.map((post) => (
              <div
                key={Math.floor(Math.random() * 10000 + 1)}
                style={{ margin: "40px" }}
                className="center"
              >
                <ThingPost image={post.image} data={post.data} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ThingPage;
