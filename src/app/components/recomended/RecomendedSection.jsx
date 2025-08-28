"use client"
import React, { useState, useEffect } from "react";
import TabNav from "./TabNav";
import PropertyList from "./PropertyList";
import { recomemdedApi } from "@/app/services/allApi";

// Dummy properties for testing
const dummyProperties = [
  {
    image: "images/home/house-1.jpg",
    avatar: "images/avatar/avt-png1.png",
    title: "Casa Lomas de Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    beds: 3,
    baths: 2,
    sqft: 1150,
    price: "$7250,00",
    agent: "Arlene McCoy",
  },
];

function RecommendedSection() {
  const [all, setAll] = useState([]);
    const [house, setHouse] = useState([]);
      const [plot, setPlot] = useState([]);



  const fetchProperties = async () => {
    try {
        console.log();
        
      const res = await recomemdedApi();
      setAll(res.data.data.all);
      setHouse(res.data.data.house);
      setPlot(res.data.data.plot);
      console.log("API response:", res);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };


  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <section className="flat-section flat-recommended">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Featured Properties</div>
          <h3 className="mt-4 title">Recommended For You</h3>
        </div>

        <div
          className="flat-tab-recommended flat-animate-tab wow fadeInUp"
          data-wow-delay=".2s"
        >
          {/* Pass handler to TabNav */}
          <TabNav/>

          <div className="tab-content">
            <div className="tab-pane" id="apartment" role="tabpanel">
              <PropertyList properties={house} />
            </div>
            <div className="tab-pane active" id="viewAll" role="tabpanel">
              <PropertyList properties={all} />
            </div>
            <div className="tab-pane" id="villa" role="tabpanel">
              <PropertyList properties={plot} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendedSection;
