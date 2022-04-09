implementation find_connection (etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender.sender
          { when all
              {
                  sender.component is me
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }

