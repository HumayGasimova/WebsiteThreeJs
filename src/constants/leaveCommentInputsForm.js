export const leaveCommentInputForm = [
        {
            id: 1,
            inputFieldName: "First Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your first name'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    minLength: 8,
                    valid: false
                }  
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text"
        },
        {
            id: 2,
            inputFieldName: "Last Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Your last name'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text"
        },
        { 
            id: 3,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Your E-Mail'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text"
        },
        {
            id: 4,
            inputFieldName: "Comment",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Your comment',
                rows: "5"
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text"
        }
    ]
