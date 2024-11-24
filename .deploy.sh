#!/bin/bash
# reasons for this were: 
# - shared hosting has no rsync
# - git webhooks werent working with subdirs and I don't want to handle a separate deploy branch.
# Just copy over SSG result with SCP for now.
deploy() {
    git diff --quiet || \
    { echo "Please commit changes before deploying"; exit 1; }
    git diff --quiet --cached || \
    { echo "Please commit changes before deploying"; exit 1; }
    npm run build && \
    scp -rpC dist/client/* netcup:/moritzrehbach.de/httpdocs/deployment && \
    confirm "About to start destructive operations on server, are you sure? [y/N]" || exit 0; \
    ssh netcup 'rm -r /moritzrehbach.de/httpdocs/public/*'
    ssh netcup 'mv /moritzrehbach.de/httpdocs/deployment/* /moritzrehbach.de/httpdocs/public/' && \
    echo "Deployed successfully, cleaning up: "
    ssh netcup 'rm -r /moritzrehbach.de/httpdocs/deployment' && \
    echo "Deployment finished."
}

# from stackoverflow/questions/3231804/ as I'm not a good shell scripter...
confirm() {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            true
            ;;
        *)
            false
            ;;
    esac
}

deploy
