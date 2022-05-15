import Container from "app/templates/container/Container";
import Section from "app/templates/section/Section";
import React from "react";
import style from "./header.module.css";
import Flower from "app/molecules/svg/flower/Flower";
type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Section>
        <Container>
          <div className="flex">
            <div className="xl:basis-1/3 self-center">
              <p className="text-3xl">
                Le materie prime per fare il miele sono reperite direttamente
                dalle api: il nettare dei fiori o la melata sono raccolti dalle
                <i> api bottinatrici</i>, operaie specializzate.
              </p>
            </div>
            <div className="xl:basis-2/3 flex justify-end">
              <div className={style.imgContainer}>
                <Flower />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex">
            <div className="xl:basis-1/3">
              <h2 className={`text-5xl font-semibold mb-4 ${style.underline}`}>
                Mellĭfĭcus
              </h2>
              <p className="text-2xl">
                Dal latino, significa <strong>portatore di miele</strong>. Il
                potenziale mellifero di una pianta esprime la quantità di miele
                che le api potrebbero produrre visitando in condizioni ideali.
                La presenza di fioriture continue che garantiscano un buon
                apporto di nettare e polline sono la garanzia per la vita e lo
                sviluppo delle api.
              </p>
            </div>
            <div className="xl:basis-2/3">
              <div className={style.imgContainer}>
                <img
                  className={style.flower2}
                  src="/images/homepage/fiore3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
