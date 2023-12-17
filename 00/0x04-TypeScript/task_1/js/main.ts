interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
};

interface Directors extends Teacher {
    numberOfReports: Number
};

interface printTeacherFunction {
    (firstName: string, lastName: string) : string
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) : string => `${firstName.charAt(0)}. ${lastName}`;

interface classInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements classInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

}

interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
}
