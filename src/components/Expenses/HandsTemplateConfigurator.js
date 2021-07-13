import React from "react";
import Card from "../UI/Card";
import HandsConfigurator from "./HandsConfigurator";
import "./HandsTemplateConfigurator.css";

function HandsTemplateConfigurator(props) {
  return (
    <div>
      <Card className="configurator">
        <HandsConfigurator/>
      </Card>
    </div>
  );
}
export default HandsTemplateConfigurator;
