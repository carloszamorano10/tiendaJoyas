const HATEOAS = async (entity, data) => {
  const result = data.map((item) => {
    return {
      Joyas: [
        {
          href: `http://localhost:3000/${entity}/${item.id}`,
        },
      ],
    };
  });

  const total = data.length;
  const dataWithHateoas = {
    total,
    result,
  };
  return dataWithHateoas;
};

export default HATEOAS;
