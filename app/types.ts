type dataType = {
  age: number;
  gender: string;
  name: string;
  profile_picture: string;
  diagnosis_history: {
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };

    month: string;
    year: string;
  }[];
  lab_results: string[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
};

type HistoryProps = {
  data: {
    diagnosis_history: {
      blood_pressure: {
        systolic: {
          value: number;
          levels: string;
        };
        diastolic: {
          value: number;
          levels: string;
        };
      };
      respiratory_rate: {
        value: number;
        levels: string;
      };
      heart_rate: {
        value: number;
        levels: string;
      };
      temperature: {
        value: number;
        levels: string;
      };

      month: string;
      year: string;
    }[];
  };
};
