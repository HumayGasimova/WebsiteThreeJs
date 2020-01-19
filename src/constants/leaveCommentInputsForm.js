export const leaveCommentInputForm = [
        {
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
                    valid: "false"
                }
            ],
            validField: "false",
            touched: "false",
            errorMessage: [],
            type: "text"
        },
        {
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
                    valid: "false"
                }
            ],
            validField: "false",
            touched: "false",
            errorMessage: [],
            type: "text"
        },
        {
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
                    valid: "false"
                },
                {
                    isEmail: true,
                    valid: "false"
                }
            ],
            validField: "false",
            touched: "false",
            errorMessage: [],
            type: "text"
        },
        {
            inputFieldName: "Comment",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Your comment'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: "false"
                }
            ],
            validField: "false",
            touched: "false",
            errorMessage: [],
            type: "text"
        }
    ]
