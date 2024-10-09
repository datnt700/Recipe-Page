/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

import { InputSearch } from '@/app/_components/common/InputSearch';
import { contentStyle } from '@/app/_components/layout/Content.style';
import { DropList } from '@/app/_components/common/DropList';
import { Food } from '@/app/_components/layout/Food';

interface ContentProps {
  cateName: string;
}

export const Content = ({ cateName }: ContentProps) => {
  const [activeList, setActiveList] = useState(false);
  const [nameFood, setNameFood] = useState('');
  const [option, setOption] = useState('Name');
  const handleOpenList = () => {
    setActiveList((e) => !e);
  };

  const handleClicked = (op: string) => {
    setOption(op);
    setActiveList(false);
  };

  useEffect(() => {
    console.log(nameFood);
  }, [nameFood]);

  const ListOption = [
    {
      id: '1',
      option: 'Name',
    },
    {
      id: '2',
      option: 'Id',
    },
  ];

  return (
    <section id={'Content'}>
      <div css={contentStyle.container}>
        <div css={contentStyle.features}>
          <InputSearch setNameFood={setNameFood} />
          <DropList
            handleOpenList={handleOpenList}
            handleClicked={handleClicked}
            activeList={activeList}
            listOption={ListOption}
            option={option}
          />
        </div>
        <Food cateName={cateName} option={option} nameFood={nameFood} />
      </div>
    </section>
  );
};
