implementation find_connection_in__me (child, etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.component == child
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }
  { check return "connection not found for ${etag}" }

