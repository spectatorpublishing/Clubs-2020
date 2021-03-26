import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import TomatoButton from '../tomatoButton';

const FullPageModal = ({
  isTermsOfUseShowing,
  setIsTermsOfUseShowing,
  text,
}) => {
  const grayVariants = {
    init: { opacity: 0 },
    anim: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.125 } },
  };

  const modalVariants = {
    init: { opacity: 0 },
    anim: { opacity: 1, transition: { delay: 0.125 } },
    exit: { opacity: 0, transition: { delay: 0 } },
  };
  return (
    <AnimatePresence>
      {isTermsOfUseShowing && (
        <Wrapper>
          <GrayBackground
            variants={grayVariants}
            initial='init'
            animate='anim'
            exit='exit'
            onClick={() => {
              setIsTermsOfUseShowing(false);
            }}
          />
          <Modal
            variants={modalVariants}
            initial='init'
            animate='anim'
            exit='exit'
            transition={{ delay: 0.25 }}
          >
            <TermsOfUseHeader>Terms Of Use</TermsOfUseHeader>
            {text ? (
              text
            ) : (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero id faucibus nisl tincidunt eget nullam non nisi.
                Scelerisque viverra mauris in aliquam. Blandit libero volutpat
                sed cras. Leo a diam sollicitudin tempor. Massa massa ultricies
                mi quis. Mauris a diam maecenas sed enim ut sem viverra. Egestas
                diam in arcu cursus euismod quis viverra nibh cras. Nunc
                lobortis mattis aliquam faucibus purus in. Eget magna fermentum
                iaculis eu non diam phasellus vestibulum lorem. Donec enim diam
                vulputate ut pharetra sit amet. Mauris rhoncus aenean vel elit.
                Eu ultrices vitae auctor eu. Lacus luctus accumsan tortor
                posuere ac ut. Turpis cursus in hac habitasse platea. Lorem
                ipsum dolor sit amet consectetur adipiscing elit duis tristique.
                Tempus quam pellentesque nec nam aliquam sem. Amet facilisis
                magna etiam tempor orci eu lobortis elementum. Viverra justo nec
                ultrices dui sapien eget. Nec nam aliquam sem et tortor
                consequat. Purus in mollis nunc sed id. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames. Viverra
                justo nec ultrices dui. Sit amet nisl purus in mollis nunc sed.
                Viverra vitae congue eu consequat. Mauris rhoncus aenean vel
                elit scelerisque mauris pellentesque. Massa vitae tortor
                condimentum lacinia. Libero enim sed faucibus turpis. Donec enim
                diam vulputate ut pharetra sit amet. Donec adipiscing tristique
                risus nec feugiat in. Dictumst vestibulum rhoncus est
                pellentesque elit ullamcorper dignissim cras. Volutpat est velit
                egestas dui id. Imperdiet dui accumsan sit amet nulla facilisi
                morbi tempus. Molestie at elementum eu facilisis sed odio morbi.
                Sed cras ornare arcu dui vivamus arcu felis bibendum. Pulvinar
                elementum integer enim neque volutpat ac tincidunt vitae. Vitae
                tempus quam pellentesque nec nam. Ultrices sagittis orci a
                scelerisque. In fermentum posuere urna nec tincidunt. Ultricies
                integer quis auctor elit sed. Aenean euismod elementum nisi quis
                eleifend quam adipiscing. Odio morbi quis commodo odio aenean
                sed. Quam viverra orci sagittis eu volutpat odio facilisis.
                Hendrerit dolor magna eget est. Est pellentesque elit
                ullamcorper dignissim cras. Augue eget arcu dictum varius duis
                at consectetur lorem. Eu augue ut lectus arcu bibendum at. Ac ut
                consequat semper viverra nam libero. Dui sapien eget mi proin
                sed libero enim. Integer vitae justo eget magna fermentum
                iaculis eu non. Est sit amet facilisis magna. Sit amet est
                placerat in egestas erat. Massa ultricies mi quis hendrerit
                dolor. Urna molestie at elementum eu. Neque ornare aenean
                euismod elementum. Urna porttitor rhoncus dolor purus non enim
                praesent elementum facilisis. Sed odio morbi quis commodo odio
                aenean sed adipiscing. At consectetur lorem donec massa sapien
                faucibus. Pretium fusce id velit ut tortor pretium viverra
                suspendisse. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Mauris augue neque gravida in fermentum et.
              </>
            )}
            <SubmitRow>
              <TomatoButton
                text='Done'
                onClick={() => {
                  setIsTermsOfUseShowing(false);
                }}
              />
            </SubmitRow>
          </Modal>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

const SubmitRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const Modal = styled(motion.div)`
  background: white;
  width: 50rem;
  height: auto;
  max-height: 80%;
  overflow: auto;
  z-index: 999;
  position: relative;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
`;

const TermsOfUseHeader = styled.h1`
  text-align: center;
  margin-top: 0;
`;

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GrayBackground = styled(motion.div)`
  position: absolute;
  background: rgba(82, 82, 82, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 4;
`;

export default FullPageModal;
