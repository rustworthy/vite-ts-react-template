import { VStack } from "@chakra-ui/react";

import { Page } from "shared/Layout";

import {
  HeroSection,
  FeatureSection,
  PricingSection,
} from "modules/marketing/presentation";
import { useProductsQuery } from "modules/products/infrastructure";

interface IProps {
  fallbackProductsNumber?: number;
}

const HomePage = ({ fallbackProductsNumber }: IProps) => {
  const { data } = useProductsQuery();

  return (
    <Page maxW="1340px">
      <VStack display="stretch" spacing={{ base: 8, lg: 20 }}>
        <HeroSection
          productNumber={fallbackProductsNumber ?? data?.meta.total ?? 0}
        />
        <FeatureSection />
        <PricingSection />
      </VStack>
    </Page>
  );
};

export { HomePage };