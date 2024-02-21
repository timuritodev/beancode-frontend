export interface IDeliveryData {
  number: string;
  comment: string;
  delivery_recipient_cost: {
    value: number;
  };
  delivery_recipient_cost_adv: [
    {
      sum: number; //??
      threshold: number;
    }
  ];
  from_location: {
    code: number;
    fias_guid?: number; //
    postal_code?: string; //
    longitude?: number; //
    latitude?: number; //
    country_code?: string; //
    region?: number; //
    sub_region?: string; //
    city: string;
    kladr_code?: string; //
    address: string;
  };
  to_location: {
    code: number;
    fias_guid: number; //
    postal_code: string; //
    longitude: number; //
    latitude: number; //
    country_code: string; //
    region: number; //
    sub_region: string; //
    city: string;
    kladr_code: string; //
    address: string;
  };
  packages: [
    {
      number: string;
      comment: string;
      height: number;
      items: [
        {
          ware_key: number;
          payment: {
            value: number;
          };
          name: string;
          cost: number;
          amount: number;
          weight: number;
          url: string;
        }
      ];
      length: number;
      weight: number;
      width: number;
    }
  ];
  recipient: {
    name: string;
    phones: [
      {
        number: string;
      }
    ];
  };
  sender: {
    name: string;
  };
  services: [
    {
      code: string;
    }
  ];
  tariff_code: number;
}

export interface IDeliverDataRes {
  entity: {
    uuid: string;
  },
  requests: {
    request_uuid: string;
    type: string;
    state: string;
    date_time: string;
    errors: [];
    warnings: [];
  }[];
}

// export interface IDeliverData {
//   number: string;
//   tariff_code: string;
//   delivery_recipient_cost: { value: number };
//   threshold: number;
//   sum: number;
//   recipient: {
//     name:string;
//     phones: string;
//   };
//   packages: {
//     number: string;
//     items4: string;//items[]
//     name: string;
//     ware_key: string;
//     payment: string;//money
//     value: number;
//     cost:number;
//     weight: number;
//     amount:number;

//   }
// }

// export interface IDeliverData {
//     number: string;
//     // tariff_code :;
//     shipment_point?: string;
//     delivery_point?: string;
//     value: number;//float;
//     threshold: number;
//     sum: number;//float
//     recipient: string;
//     name: string;
//     phones: string;
//     number2: string;
//     address: string;
//     code: string;
//     packages: string;

// }
