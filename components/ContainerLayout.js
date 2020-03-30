import HeaderLayout from '../components/HeaderLayout';
import BannerLayout from '../components/BannerLayout';
import PhraseLayout from '../components/PhraseLayout';
import FeatureLayout from '../components/FeatureLayout';
import ActivationLayout from '../components/ActivationLayout';
import ActivationBannerLayout from '../components/ActivationBannerLayout';
import FooterLayout from '../components/FooterLayout';
import PartnersLayout from '../components/PartnersLayout';
/*
 <PartnersLayout></PartnersLayout>
 <ActivationBannerLayout></ActivationBannerLayout>
*/

const ContainerLayout = props => (
  <div>
      <HeaderLayout></HeaderLayout>
      <BannerLayout></BannerLayout>
      <PhraseLayout></PhraseLayout>
      <FeatureLayout></FeatureLayout>
      <ActivationLayout></ActivationLayout>
      
     
      <FooterLayout></FooterLayout>
  </div>
);

export default ContainerLayout;
