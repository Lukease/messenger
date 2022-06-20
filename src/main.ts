export {}
const app = $('.app')

const renderMenu = () => {

    $('<div>')
        .addClass('navigation__title')
        .appendTo(app)
        .text('Chat app')

    const navigation = $('<div>')
        .addClass('navigation')
        .appendTo(app)

    const room = $('<div>')
        .addClass('navigation__box')
        .appendTo(navigation)

    $('<div>')
        .addClass('navigation__title')
        .appendTo(room)
        .text('Room Name')

    const roomInput = $('<input>')
        .addClass('navigation__input')
        .appendTo(room)
        .attr('placeholder', 'Set room Name')

    const user = $('<div>')
        .addClass('navigation__box')
        .appendTo(navigation)

    $('<div>')
        .addClass('navigation__title')
        .appendTo(user)
        .text('User')

    const userInput = $('<input>')
        .addClass('navigation__input')
        .appendTo(user)
        .attr('placeholder', 'Set user Name')

    const buttonBox = $('<div>')
        .appendTo(navigation)
        .addClass('navigation__button-box')

    const entryButton = $('<button>')
        .appendTo(buttonBox)
        .text('Entry')
        .addClass('entry-button')



    entryButton.click(() => {
        if (userInput.val() !== '' && roomInput.val() !== '') {
            navigation.children().remove()
            renderRoom()
        }
        if (userInput.val() === ''){
            userInput.removeClass('navigation__input')
                .addClass('navigation__input--error')
        }
        if (roomInput.val() === '') {
            roomInput.removeClass('navigation__input')
                .addClass('navigation__input--error')
        }
    })

    return navigation
}

renderMenu()

const renderRoom = () => {
    const navigation = $('.navigation')
    const messagesBox = $('<div>')
        .addClass('navigation__text')
        .appendTo(navigation)
    const newMessagesBox = $('<div>')
        .addClass('create-Message')
        .appendTo(navigation)
    const addPictureIcon = $('<button>')
        .addClass('create-Message__photo')
        .appendTo(newMessagesBox)

    const message = $('<input>')
        .appendTo(newMessagesBox)
        .css('border-radius', '10px')
        .addClass('create-Message__input')

    const addButton = $('<button>')
        .addClass('create-Message__send')
        .appendTo(newMessagesBox)
        .text('send')

    addButton.click(() => {
        const text: string = message.val()
        if (text !== '') {
            const newMessage = $('<div>').appendTo(messagesBox)
                .addClass('create-Message__messages')
            $('<div>').appendTo(newMessage)
                .addClass('create-Message__messages--user')
                .text(text)
            $('<div>').appendTo(newMessage).addClass('navigation__text--user')
                .text('12:45')

            message.val('')
        }
    })
}