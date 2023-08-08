export type CourseType = {
  id: string;
  parent_item_id?: string;
  descriptor: {
    name: string;
    long_desc?: string;
    themes: string;
    contentType: string;
    language: string;
    competency: string;
    domain: string;
    goal: string;
    images: Array<{ url: string }>;
  };
  price: {
    currency: string;
    value: string | number;
  };
  category_id: string;
  recommended: boolean;
  time: {
    label: string;
    duration: string;
    range: {
      start: string;
      end: string;
    };
  };
  rating: string;
  tags: [
    {
      descriptor: { name: string };
      list: Array<{
        name: any;
        // descriptor: {
        //   name: string;
        // };
        value: string;
      }>;
    }
  ];
  rateable: boolean;
};
