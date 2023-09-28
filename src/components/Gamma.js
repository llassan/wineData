import React, { useEffect, useState } from "react";
import { data } from "../assets/wineData";
import { calculateMean, calculateMedian, calculateMode } from "../helpers/Helpers";

function Gamma() {
  const [gammaData, setGammaData] = useState([]);

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
    setGammaProperty(data);
    classifyAlcohol(data);
    mean();
    median();
    mode();
  }, []);

  var classOne = [];
  var classTwo = [];
  var classThree = [];

  return (
    <>
      <h2>Gamma: </h2>

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
            <td>{firstMean || "0"}</td>
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
            <td>{thirdMode.length === 0 ? 0 : { thirdMode }}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  // Calulate Gamma
  function setGammaProperty(data) {
    let newData = data.map((data) => {
      data.Gamma = ((data.Ash * data.Hue) / data.Magnesium).toFixed(3);
      return data;
    });
    setGammaData(newData);
  }

  // Classification
  function classifyAlcohol(arr) {
    arr.forEach((item) => {
      if (item.Alcohol === 1) {
        classOne.push(Number(item.Gamma));
      } else if (item.Alcohol === 2) {
        classTwo.push(Number(item.Gamma));
      } else if (item.Alcohol === 3) {
        classThree.push(Number(item.Gamma));
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
  function median() {
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

export default Gamma;
