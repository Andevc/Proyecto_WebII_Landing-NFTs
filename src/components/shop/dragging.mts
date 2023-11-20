import { sliderMarket } from "./MarketSlider.astro.0.mts";

export const dragging = (e) => {
sliderMarket?.scrollLeft = e.pageX;
};
