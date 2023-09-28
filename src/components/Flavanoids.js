import React, { useEffect, useState } from "react";
import { data } from "../assets/wineData";

import Gamma from "./Gamma";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../helpers/Helpers";
function Flavanoids() {
  const [firstMean, setFirstMean] = useState();
  const [secondMean, setSecondMean] = useState();
  const [thirdMean, setThirdMean] = useState();

  const [firstMedian, setFirstMedian] = useState();
  const [secondMedian, setSecondMedian] = useState();
  const [thirdMedian, setThirdMedian] = useState();

  const [firstMode, setFirstMode] = useState([]);
  const [secondMode, setSecondMode] = useState([]);
  const [thirdMode, setThirdMode] = useState([]);

  useEffect(() => {
    classifyAlcohol(data);
    mean();
    median(data);
    mode(data);
  }, []);

  var classOne = [];
  var classTwo = [];
  var classThree = [];

  return (
    <>
      <h2>Flavanoids: </h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{firstMean}</td>
            <td>{secondMean}</td>
            <td>{thirdMean}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{firstMedian}</td>
            <td>{secondMedian}</td>
            <td>{thirdMedian}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{firstMode}</td>
            <td>{secondMode}</td>
            <td>{thirdMode.toString()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  // Classification
  function classifyAlcohol(arr) {
    // console.log(arr);
    arr.forEach((item) => {
      if (item.Alcohol === 1) {
        classOne.push(Number(item.Flavanoids));
      } else if (item.Alcohol === 2) {
        classTwo.push(Number(item.Flavanoids));
      } else if (item.Alcohol === 3) {
        classThree.push(Number(item.Flavanoids));
      }
    });
  }

  // Mean
  function mean() {
    setFirstMean(calculateMean(classOne).toFixed(3));
    setSecondMean(calculateMean(classTwo).toFixed(3));
    setThirdMean(calculateMean(classThree).toFixed(3));
  }

  // Median
  function median(arr) {
    setFirstMedian(calculateMedian(classOne));
    setSecondMedian(calculateMedian(classTwo));
    setThirdMedian(calculateMedian(classThree));
  }

  // Mode
  function mode() {
    setFirstMode(calculateMode(classOne));
    setSecondMode(calculateMode(classTwo));
    setThirdMode(calculateMode(classThree));
  }
}

export default Flavanoids;
