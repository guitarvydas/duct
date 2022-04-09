implementation find_connection (etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.component == me
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }

