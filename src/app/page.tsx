"use client";

import { Card, Link, Text, Icon } from "@stellar/design-system";

import { NextLink } from "@/components/NextLink";
import { LayoutContentContainer } from "@/components/layout/LayoutContentContainer";
import  {InfoCards2} from "@/components/InfoCards2";
import { SdsLink } from "@/components/SdsLink";
import { Box } from "@/components/layout/Box";
import { Routes } from "@/constants/routes";
import { openUrl } from "@/helpers/openUrl";

export default function Introduction() {
  const infoCards = [
    {
      id: "fee-estimation",
      title: "Fee Estimation",
      description:
        "Estimate fees based on current network conditions to optimize transaction costs.",
      buttonLabel: "Try It",
      buttonIcon: <Icon.ArrowBlockRight />,
      buttonAction: Routes.BUILD_TRANSACTION,
    },
    {
      id: "fee-simulation",
      title: "Fee Simulation",
      description:
        "Simulate transactions with different fee settings to find optimal costs.",
      buttonLabel: "Try It",
      buttonIcon: <Icon.ArrowBlockRight />,
      buttonAction:Routes.VIEW_XDR, 
    },
    {
      id: "fee-history",
      title: "Analytics",
      description:
        "Track historical fee data and trends to make informed decisions.",
      buttonLabel: "Explore",
      buttonIcon: <Icon.ArrowBlockRight />,
      buttonAction: Routes.SOROBAN_CONTRACT_EXPLORER,
    },
  ];

  return (
    <LayoutContentContainer>
      <Card>
        <div className="CardText">
          <Text size="lg" as="h1" weight="medium">
            Fee Simulator
          </Text>

          <Text size="sm" as="p">
            The Fee Simulator Tool is designed to help users understand and optimize transaction fees on the Stellar network. This tool includes features like:
          </Text>

          <ul>
            <li>Fee estimation based on current network conditions</li>
            <li>Fee simulation to find the optimal transaction costs</li>
            <li>Historical fee data tracking and trend analysis</li>
          </ul>
        </div>
      </Card>

      <InfoCards2 infoCards={infoCards} />

      
    </LayoutContentContainer>
  );
}
