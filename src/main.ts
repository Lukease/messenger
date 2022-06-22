export {}

const app = $('.app')
let url: Array<string> = []

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
    const entryButton = $('.entry-button')
        .appendTo(buttonBox)

    entryButton.click(() => {
        if (userInput.val() !== '' && roomInput.val() !== '') {
            navigation.remove()
            renderRoom()
            // window.location.pathname = `room=${roomInput.val()}`
            window.history.pushState({}, '', `/room/${roomInput.val()}/user/${userInput.val()}`)
            console.log(window.location.pathname)
            const url1 = window.location.pathname
            url = url.concat(url1)
        }

        if (userInput.val() === '') {
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

const renderRoom = () => {
    $('.entry-button').remove()

    const navigation = $('<div>')
        .addClass('room-messages')
        .appendTo(app)
    const messagesBox = $('<div>')
        .addClass('navigation__text')
        .appendTo(navigation)
    const newMessagesBox = $('<div>')
        .addClass('create-Message')
        .appendTo(navigation)
    const addPictureIcon = $('.fa-camera')
        .appendTo(newMessagesBox)
        .addClass('create-Message__photo')
    const message = $('<input>')
        .appendTo(newMessagesBox)
        .css('border-radius', '10px')
        .addClass('create-Message__input')
        .attr('placeholder', 'message...')
    const addButton = $('.fa-paper-plane')
        .appendTo(newMessagesBox)
        .addClass('create-Message__photo')

    addButton.click(() => {
        const text: string = message.val()
        if (text !== '') {
            const newMessage = $('<div>')
                .appendTo(messagesBox)
                .addClass('create-Message__messages')

            $('<div>').appendTo(newMessage)
                .addClass('create-Message__messages--user')
                .text(text)
            $('<div>').appendTo(newMessage).addClass('create-Message__messages--time')
                .text('12:45')

            message.val('')
        }
    })
}

renderMenu()

const renderNavigation = () => {
    url.forEach(address => {
        if (address !== '/') {

            window.location.assign('http://localhost:3000/')
            window.history.pushState({}, '', address)
        }
        console.log(address)

        // if (url === '/'){
        //     window.history.pushState({}, '', url)
        //     console.log('location')
        // }
    })

}

renderNavigation()